/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as azdata from 'azdata';
import * as vscode from 'vscode';

import { IServerInstance } from '../jupyter/common';
import { Session, Kernel, KernelMessage, ServerConnection } from '@jupyterlab/services';
import { ISignal } from '@phosphor/signaling';

export class JupyterServerInstanceStub implements IServerInstance {
	public get port(): string {
		return undefined;
	}

	public get uri(): vscode.Uri {
		return undefined;
	}

	public configure(): Promise<void> {
		throw new Error('Method not implemented.');
	}

	public start(): Promise<void> {
		throw new Error('Method not implemented.');
	}

	stop(): Promise<void> {
		throw new Error('Method not implemented.');
	}
}


//#region sesion and kernel stubs (long)
export class SessionStub implements Session.ISession {
	public get terminated(): ISignal<this, void> {
		throw new Error('Method not implemented.');
	}
	public get kernelChanged(): ISignal<this, Session.IKernelChangedArgs> {
		throw new Error('Method not implemented.');
	}
	public get statusChanged(): ISignal<this, Kernel.Status> {
		throw new Error('Method not implemented.');
	}
	public get propertyChanged(): ISignal<this, 'path' | 'name' | 'type'> {
		throw new Error('Method not implemented.');
	}
	public get iopubMessage(): ISignal<this, KernelMessage.IIOPubMessage> {
		throw new Error('Method not implemented.');
	}
	public get unhandledMessage(): ISignal<this, KernelMessage.IMessage> {
		throw new Error('Method not implemented.');
	}
	public get anyMessage(): ISignal<this, Kernel.IAnyMessageArgs> {
		throw new Error('Method not implemented.');
	}
	public get id(): string {
		throw new Error('Method not implemented.');
	}
	public get path(): string {
		throw new Error('Method not implemented.');
	}
	public get name(): string {
		throw new Error('Method not implemented.');
	}
	public get type(): string {
		throw new Error('Method not implemented.');
	}
	public get serverSettings(): ServerConnection.ISettings {
		throw new Error('Method not implemented.');
	}
	public get model(): Session.IModel {
		throw new Error('Method not implemented.');
	}
	public get kernel(): Kernel.IKernelConnection {
		throw new Error('Method not implemented.');
	}
	public get status(): Kernel.Status {
		throw new Error('Method not implemented.');
	}
	public get isDisposed(): boolean {
		throw new Error('Method not implemented.');
	}
	setPath(path: string): Promise<void> {
		throw new Error('Method not implemented.');
	}
	setName(name: string): Promise<void> {
		throw new Error('Method not implemented.');
	}
	setType(type: string): Promise<void> {
		throw new Error('Method not implemented.');
	}
	changeKernel(options: Partial<Kernel.IModel>): Promise<Kernel.IKernelConnection> {
		throw new Error('Method not implemented.');
	}
	shutdown(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	dispose(): void {
		throw new Error('Method not implemented.');
	}
}

export class KernelStub implements Kernel.IKernel {
	get terminated(): ISignal<this, void> {
		throw new Error('Method not implemented.');
	}
	get statusChanged(): ISignal<this, Kernel.Status> {
		throw new Error('Method not implemented.');
	}
	get iopubMessage(): ISignal<this, KernelMessage.IIOPubMessage> {
		throw new Error('Method not implemented.');
	}
	get unhandledMessage(): ISignal<this, KernelMessage.IMessage> {
		throw new Error('Method not implemented.');
	}
	get anyMessage(): ISignal<this, Kernel.IAnyMessageArgs> {
		throw new Error('Method not implemented.');
	}
	get serverSettings(): ServerConnection.ISettings {
		throw new Error('Method not implemented.');
	}
	get id(): string {
		throw new Error('Method not implemented.');
	}
	get name(): string {
		throw new Error('Method not implemented.');
	}
	get model(): Kernel.IModel {
		throw new Error('Method not implemented.');
	}
	get username(): string {
		throw new Error('Method not implemented.');
	}
	get clientId(): string {
		throw new Error('Method not implemented.');
	}
	get status(): Kernel.Status {
		throw new Error('Method not implemented.');
	}
	get info(): KernelMessage.IInfoReply {
		throw new Error('Method not implemented.');
	}
	get isReady(): boolean {
		throw new Error('Method not implemented.');
	}
	get ready(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	get isDisposed(): boolean {
		throw new Error('Method not implemented.');
	}
	shutdown(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	getSpec(): Promise<Kernel.ISpecModel> {
		throw new Error('Method not implemented.');
	}
	sendShellMessage(msg: KernelMessage.IShellMessage, expectReply?: boolean, disposeOnDone?: boolean): Kernel.IFuture {
		throw new Error('Method not implemented.');
	}
	reconnect(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	interrupt(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	restart(): Promise<void> {
		throw new Error('Method not implemented.');
	}
	requestKernelInfo(): Promise<KernelMessage.IInfoReplyMsg> {
		throw new Error('Method not implemented.');
	}
	requestComplete(content: KernelMessage.ICompleteRequest): Promise<KernelMessage.ICompleteReplyMsg> {
		throw new Error('Method not implemented.');
	}
	requestInspect(content: KernelMessage.IInspectRequest): Promise<KernelMessage.IInspectReplyMsg> {
		throw new Error('Method not implemented.');
	}
	requestHistory(content: KernelMessage.IHistoryRequest): Promise<KernelMessage.IHistoryReplyMsg> {
		throw new Error('Method not implemented.');
	}
	requestExecute(content: KernelMessage.IExecuteRequest, disposeOnDone?: boolean): Kernel.IFuture {
		throw new Error('Method not implemented.');
	}
	requestIsComplete(content: KernelMessage.IIsCompleteRequest): Promise<KernelMessage.IIsCompleteReplyMsg> {
		throw new Error('Method not implemented.');
	}
	requestCommInfo(content: KernelMessage.ICommInfoRequest): Promise<KernelMessage.ICommInfoReplyMsg> {
		throw new Error('Method not implemented.');
	}
	sendInputReply(content: KernelMessage.IInputReply): void {
		throw new Error('Method not implemented.');
	}
	connectToComm(targetName: string, commId?: string): Kernel.IComm {
		throw new Error('Method not implemented.');
	}
	registerCommTarget(targetName: string, callback: (comm: Kernel.IComm, msg: KernelMessage.ICommOpenMsg) => void | PromiseLike<void>): void {
		throw new Error('Method not implemented.');
	}
	removeCommTarget(targetName: string, callback: (comm: Kernel.IComm, msg: KernelMessage.ICommOpenMsg) => void | PromiseLike<void>): void {
		throw new Error('Method not implemented.');
	}
	registerMessageHook(msgId: string, hook: (msg: KernelMessage.IIOPubMessage) => boolean | PromiseLike<boolean>): void {
		throw new Error('Method not implemented.');
	}
	removeMessageHook(msgId: string, hook: (msg: KernelMessage.IIOPubMessage) => boolean | PromiseLike<boolean>): void {
		throw new Error('Method not implemented.');
	}
	dispose(): void {
		throw new Error('Method not implemented.');
	}
}

export class FutureStub implements Kernel.IFuture {
	get msg(): KernelMessage.IShellMessage {
		throw new Error('Method not implemented.');
	}
	get done(): Promise<KernelMessage.IShellMessage> {
		throw new Error('Method not implemented.');
	}
	get isDisposed(): boolean {
		throw new Error('Method not implemented.');
	}
	get onReply(): (msg: KernelMessage.IShellMessage) => void | PromiseLike<void> {
		throw new Error('Method not implemented.');
	}
	set onReply(handler: (msg: KernelMessage.IShellMessage) => void | PromiseLike<void>) {
		throw new Error('Method not implemented.');
	}
	get onStdin(): (msg: KernelMessage.IStdinMessage) => void | PromiseLike<void> {
		throw new Error('Method not implemented.');
	}
	set onStdin(handler: (msg: KernelMessage.IStdinMessage) => void | PromiseLike<void>) {
		throw new Error('Method not implemented.');
	}
	get onIOPub(): (msg: KernelMessage.IIOPubMessage) => void | PromiseLike<void> {
		throw new Error('Method not implemented.');
	}
	set onIOPub(handler: (msg: KernelMessage.IIOPubMessage) => void | PromiseLike<void>) {
		throw new Error('Method not implemented.');
	}
	registerMessageHook(hook: (msg: KernelMessage.IIOPubMessage) => boolean | PromiseLike<boolean>): void {
		throw new Error('Method not implemented.');
	}
	removeMessageHook(hook: (msg: KernelMessage.IIOPubMessage) => boolean | PromiseLike<boolean>): void {
		throw new Error('Method not implemented.');
	}
	sendInputReply(content: KernelMessage.IInputReply): void {
		throw new Error('Method not implemented.');
	}
	dispose(): void {
		throw new Error('Method not implemented.');
	}
}
//#endregion

//#region test modelView components
class TestComponentBase implements azdata.Component {
	id: string = '';
	updateProperties(properties: { [key: string]: any; }): Thenable<void> {
		Object.assign(this, properties);
		return Promise.resolve();
	}
	updateProperty(key: string, value: any): Thenable<void> {
		throw new Error('Method not implemented');
	}
	updateCssStyles(cssStyles: { [key: string]: string; }): Thenable<void> {
		throw new Error('Method not implemented');
	}
	onValidityChanged: vscode.Event<boolean> = undefined;
	valid: boolean = true;
	validate(): Thenable<boolean> {
		return Promise.resolve(true);
	}
	focus(): Thenable<void> {
		return Promise.resolve();
	}
}

class TestDropdownComponent extends TestComponentBase implements azdata.DropDownComponent {
	constructor(private onClick: vscode.EventEmitter<any>) {
		super();
	}
	onValueChanged: vscode.Event<any> = this.onClick.event;
}

class TestDeclarativeTableComponent extends TestComponentBase implements azdata.DeclarativeTableComponent {
	constructor(private onClick: vscode.EventEmitter<any>) {
		super();
	}
	onDataChanged: vscode.Event<any> = this.onClick.event;
	data: any[][];
	columns: azdata.DeclarativeTableColumn[];
}

class TestButtonComponent extends TestComponentBase implements azdata.ButtonComponent {
	constructor(private onClick: vscode.EventEmitter<any>) {
		super();
	}
	onDidClick: vscode.Event<any> = this.onClick.event;
}

class TestRadioButtonComponent extends TestComponentBase implements azdata.RadioButtonComponent {
	constructor(private onClick: vscode.EventEmitter<any>) {
		super();
	}
	onDidClick: vscode.Event<any> = this.onClick.event;
}

class TestTextComponent extends TestComponentBase implements azdata.TextComponent {
}

class TestLoadingComponent extends TestComponentBase implements azdata.LoadingComponent {
	loading: boolean;
	component: azdata.Component;
}

class TestFormContainer extends TestComponentBase implements azdata.FormContainer {
	items: azdata.Component[] = [];
	clearItems(): void {
	}
	addItems(itemConfigs: azdata.Component[], itemLayout?: azdata.FormItemLayout): void {
	}
	addItem(component: azdata.Component, itemLayout?: azdata.FormItemLayout): void {
	}
	insertItem(component: azdata.Component, index: number, itemLayout?: azdata.FormItemLayout): void {
	}
	removeItem(component: azdata.Component): boolean {
		return true;
	}
	setLayout(layout: azdata.FormLayout): void {
	}
	setItemLayout(component: azdata.Component, layout: azdata.FormItemLayout): void {
	}
}

class TestComponentBuilder<T extends azdata.Component> implements azdata.ComponentBuilder<T> {
	constructor(private _component: T) {
	}
	component(): T {
		return this._component;
	}
	withProperties<U>(properties: U): azdata.ComponentBuilder<T> {
		this._component.updateProperties(properties);
		return this;
	}
	withValidation(validation: (component: T) => boolean): azdata.ComponentBuilder<T> {
		return this;
	}
}

class TestLoadingBuilder extends TestComponentBuilder<azdata.LoadingComponent> implements azdata.LoadingComponentBuilder {
	withItem(component: azdata.Component): azdata.LoadingComponentBuilder {
		this.component().component = component;
		return this;
	}
}

export function createViewContext(): TestContext {
	let onClick: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();

	let form: azdata.FormContainer = new TestFormContainer();
	let textBuilder: azdata.ComponentBuilder<azdata.TextComponent> = new TestComponentBuilder(new TestTextComponent());
	let buttonBuilder: azdata.ComponentBuilder<azdata.ButtonComponent> = new TestComponentBuilder(new TestButtonComponent(onClick));
	let radioButtonBuilder: azdata.ComponentBuilder<azdata.ButtonComponent> = new TestComponentBuilder(new TestRadioButtonComponent(onClick));
	let declarativeTableBuilder: azdata.ComponentBuilder<azdata.DeclarativeTableComponent> = new TestComponentBuilder(new TestDeclarativeTableComponent(onClick));
	let loadingBuilder: azdata.LoadingComponentBuilder = new TestLoadingBuilder(new TestLoadingComponent());
	let dropdownBuilder: azdata.ComponentBuilder<azdata.DropDownComponent> = new TestComponentBuilder(new TestDropdownComponent(onClick));

	let formBuilder: azdata.FormBuilder = Object.assign({}, {
		component: () => form,
		addFormItem: () => { },
		insertFormItem: () => { },
		removeFormItem: () => true,
		addFormItems: () => { },
		withFormItems: () => formBuilder,
		withProperties: () => formBuilder,
		withValidation: () => formBuilder,
		withItems: () => formBuilder,
		withLayout: () => formBuilder
	});

	let view: azdata.ModelView = {
		onClosed: undefined!,
		connection: undefined!,
		serverInfo: undefined!,
		valid: true,
		onValidityChanged: undefined!,
		validate: undefined!,
		initializeModel: () => { return Promise.resolve(); },
		modelBuilder: <azdata.ModelBuilder>{
			radioButton: () => radioButtonBuilder,
			text: () => textBuilder,
			button: () => buttonBuilder,
			dropDown: () => dropdownBuilder,
			declarativeTable: () => declarativeTableBuilder,
			formContainer: () => formBuilder,
			loadingComponent: () => loadingBuilder
		}
	};

	return {
		view: view,
		onClick: onClick,
	};
}

export interface TestContext {
	view: azdata.ModelView;
	onClick: vscode.EventEmitter<any>;
}
//#endregion
