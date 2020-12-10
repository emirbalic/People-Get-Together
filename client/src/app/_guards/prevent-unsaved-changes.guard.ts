import { Injectable } from '@angular/core';
import {
  CanDeactivate,
} from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

@Injectable({
  providedIn: 'root',
})
export class PreventUnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(component: MemberEditComponent): boolean {
    if (component.editForm.dirty) {
      return confirm(
        'Sure you want to continue? Unsaved changes will be lost!'
      );
    }
    return true;
  }
}
