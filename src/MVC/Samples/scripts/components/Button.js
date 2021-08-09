function Button(text) {
    this.text = text || "Button";
}

Button.prototype.build = function build() {
    return `
        <button>${this.text}</button>
    `;
};

export default Button;
