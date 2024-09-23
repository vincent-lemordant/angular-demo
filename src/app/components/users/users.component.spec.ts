import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersComponent } from './users.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

describe('UsersComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [UsersComponent],
    }).compileComponents();
  });

  it(`should navigate to home`, waitForAsync(
    inject([Router, Location], (router: Router, location: Location) => {
      const fixture = TestBed.createComponent(UsersComponent);
      fixture.debugElement.query(By.css('button')).nativeElement.click();
      fixture.whenStable().then(() => {
        expect(location.path()).toEqual('/');
      });
    })
  ));

  it(`should have a users property initialized with '[]'`, () => {
    const fixture = TestBed.createComponent(UsersComponent);
    const component = fixture.componentInstance;
    expect(component.users).toEqual([]);
  });
});
