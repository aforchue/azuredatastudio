/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as azdata from 'azdata';
import * as nls from 'vscode-nls';
import { BasePage } from './basePage';
import { JupyterServerInstallation, PythonPkgDetails } from '../../jupyter/jupyterServerInstallation';
import { python3DisplayName, pysparkDisplayName, sparkScalaDisplayName, sparkRDisplayName, powershellDisplayName, allKernelsName } from '../../common/constants';
import { getDropdownValue } from '../../common/utils';

const localize = nls.loadMessageBundle();

interface RequiredPackageInfo {
	name: string;
	existingVersion: string;
	requiredVersion: string;
}

export class PickPackagesPage extends BasePage {
	private kernelLabel: azdata.TextComponent | undefined;
	private kernelDropdown: azdata.DropDownComponent | undefined;
	private requiredPackagesTable: azdata.DeclarativeTableComponent;
	private packageTableSpinner: azdata.LoadingComponent;

	private installedPackagesPromise: Promise<PythonPkgDetails[]>;
	private packageVersionMap: Map<string, string>;

	public async initialize(): Promise<boolean> {
		if (this.model.kernelName) {
			// Wizard was started for a specific kernel, so don't populate any other options
			this.kernelLabel = this.view.modelBuilder.text().withProperties<azdata.TextComponentProperties>({
				value: this.model.kernelName
			}).component();
		} else {
			let dropdownValues = [python3DisplayName, pysparkDisplayName, sparkScalaDisplayName, sparkRDisplayName, powershellDisplayName, allKernelsName];
			this.kernelDropdown = this.view.modelBuilder.dropDown().withProperties<azdata.DropDownProperties>({
				value: dropdownValues[0],
				values: dropdownValues,
				width: '300px'
			}).component();
			this.kernelDropdown.onValueChanged(async value => {
				await this.updateRequiredPackages(value.selected);
			});
		}

		this.requiredPackagesTable = this.view.modelBuilder.declarativeTable().withProperties<azdata.DeclarativeTableProperties>({
			columns: [{
				displayName: localize('configurePython.pkgNameColumn', "Name"),
				valueType: azdata.DeclarativeDataType.string,
				isReadOnly: true,
				width: '200px'
			}, {
				displayName: localize('configurePython.existingVersionColumn', "Existing Version"),
				valueType: azdata.DeclarativeDataType.string,
				isReadOnly: true,
				width: '200px'
			}, {
				displayName: localize('configurePython.requiredVersionColumn', "Required Version"),
				valueType: azdata.DeclarativeDataType.string,
				isReadOnly: true,
				width: '200px'
			}],
			data: [[]]
		}).component();

		this.packageTableSpinner = this.view.modelBuilder.loadingComponent().withItem(this.requiredPackagesTable).component();

		let formModel = this.view.modelBuilder.formContainer()
			.withFormItems([{
				component: this.kernelDropdown ?? this.kernelLabel,
				title: localize('configurePython.kernelLabel', "Kernel")
			}, {
				component: this.packageTableSpinner,
				title: localize('configurePython.requiredDependencies', "Install required kernel dependencies")
			}]).component();
		await this.view.initializeModel(formModel);
		return true;
	}

	public async onPageEnter(): Promise<void> {
		let pythonExe = JupyterServerInstallation.getPythonExePath(this.model.pythonLocation, this.model.useExistingPython);
		this.installedPackagesPromise = this.model.installation.getInstalledPipPackages(pythonExe);
		this.packageVersionMap = undefined;

		if (this.kernelDropdown) {
			if (this.model.kernelName) {
				this.kernelDropdown.value = this.model.kernelName;
			} else {
				this.model.kernelName = getDropdownValue(this.kernelDropdown);
			}
		}
		await this.updateRequiredPackages(this.model.kernelName);
	}

	public async onPageLeave(): Promise<boolean> {
		return true;
	}

	private async updateRequiredPackages(kernelName: string): Promise<void> {
		this.packageTableSpinner.loading = true;
		try {
			// Fetch list of required packages for the specified kernel
			let pkgVersions: RequiredPackageInfo[] = [];
			let requiredPackages = JupyterServerInstallation.getRequiredPackagesForKernel(kernelName);
			requiredPackages.forEach(pkg => {
				pkgVersions.push({ name: pkg.name, existingVersion: undefined, requiredVersion: pkg.version });
			});

			// For each required package, check if there is another version of that package already installed
			if (!this.packageVersionMap) {
				this.packageVersionMap = new Map<string, string>();
				let installedPackages = await this.installedPackagesPromise;
				if (installedPackages) {
					installedPackages.forEach(pkg => {
						this.packageVersionMap.set(pkg.name, pkg.version);
					});
				}
			}

			pkgVersions.forEach(pkgVersion => {
				let installedPackageVersion = this.packageVersionMap.get(pkgVersion.name);
				if (installedPackageVersion) {
					pkgVersion.existingVersion = installedPackageVersion;
				}
			});

			if (pkgVersions.length > 0) {
				let packageData: string[][] = [];
				pkgVersions.forEach(pkg => {
					packageData.push([pkg.name, pkg.existingVersion ?? '-', pkg.requiredVersion]);
				});
				this.requiredPackagesTable.data = packageData;
				this.model.packagesToInstall = requiredPackages;
			} else {
				this.instance.showErrorMessage(localize('msgUnsupportedKernel', "Could not retrieve packages for unsupported kernel {0}", kernelName));
				this.requiredPackagesTable.data = [['-', '-', '-']];
				this.model.packagesToInstall = undefined;
			}
		} finally {
			this.packageTableSpinner.loading = false;
		}
	}
}
