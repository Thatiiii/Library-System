import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button';

describe('Button', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment the click count when either button is clicked', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');

    buttons[1].click();
    fixture.detectChanges();

    expect(component.clickCount).toBe(1);
    expect(fixture.nativeElement.textContent).toContain('Click count: 1');
  });
});
