interface HTMLElementWithScrollLeft {
    scrollLeft: number;
  }
  
  class ScrollController {
    private scrollContainer: HTMLElementWithScrollLeft;
    private prevBtn: HTMLElement;
    private nextBtn: HTMLElement;
    private scrollPosition: number;
  
    constructor() {
      this.scrollContainer = document.querySelector('.scroll-container') as HTMLElementWithScrollLeft;
      this.prevBtn = document.querySelector('#prev-btn') as HTMLElement;
      this.nextBtn = document.querySelector('#next-btn') as HTMLElement;
      this.scrollPosition = 0;
  
      this.prevBtn.addEventListener('click', () => this.prevClickHandler());
      this.nextBtn.addEventListener('click', () => this.nextClickHandler());
    }
  
    private prevClickHandler(): void {
      this.scrollPosition -= 200; // adjust the value to move the desired amount
      this.scrollContainer.scrollLeft = this.scrollPosition;
    }
  
    private nextClickHandler(): void {
      this.scrollPosition += 200; // adjust the value to move the desired amount
      this.scrollContainer.scrollLeft = this.scrollPosition;
    }
  }
  
 export const scrollController = new ScrollController();