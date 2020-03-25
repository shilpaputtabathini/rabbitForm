import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitFarmingComponent } from './rabbit-farming.component';

describe('RabbitFarmingComponent', () => {
  let component: RabbitFarmingComponent;
  let fixture: ComponentFixture<RabbitFarmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbitFarmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbitFarmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
