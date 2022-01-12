class RemoteUiRoot extends HTMLElement {
  constructor(...args) {
    super(...args);
    this.currentReceiver = void 0;
  }

  set receiver(receiver) {
    var _this$currentReceiver;

    (_this$currentReceiver = this.currentReceiver) === null || _this$currentReceiver === void 0 ? void 0 : _this$currentReceiver.unbind();
    this.currentReceiver = receiver;
    if (receiver) receiver.bind(this.shadowRoot);
  }

  get receiver() {
    return this.currentReceiver;
  }

}
customElements.define('remote-ui-root', RemoteUiRoot);

export { RemoteUiRoot };
