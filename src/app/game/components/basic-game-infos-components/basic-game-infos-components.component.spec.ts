import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicGameInfosComponentsComponent } from './basic-game-infos-components.component';

describe('BasicGameInfosComponentsComponent', () => {
  let component: BasicGameInfosComponentsComponent;
  let fixture: ComponentFixture<BasicGameInfosComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicGameInfosComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicGameInfosComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
