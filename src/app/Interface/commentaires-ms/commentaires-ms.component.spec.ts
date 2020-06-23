import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentairesMsComponent } from './commentaires-ms.component';

describe('CommentairesMsComponent', () => {
  let component: CommentairesMsComponent;
  let fixture: ComponentFixture<CommentairesMsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentairesMsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentairesMsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
