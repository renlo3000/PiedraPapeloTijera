// valueobjects/PPTVO.js
export class PPTVO {
    /**
     * @param {'ROCK'|'PAPER'|'SCISSORS'} code
     * @param {string} label
     * @param {any} image  
     */
    constructor(code, label, image) {
      this.code = code;
      this.label = label;
      this.image = image;
    }
  }
  
  export { PPTVO as default };
  
  