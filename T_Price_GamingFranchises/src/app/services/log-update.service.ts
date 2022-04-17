import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate,private _snackBar: MatSnackBar) { }

  public init() {
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case 'VERSION_DETECTED':
        console.log(`Downloading new app version: ${event.version.hash}`);
        break;
        case 'VERSION_READY':
        console.log(`Current app version: ${event.currentVersion.hash}`);
        console.log(`New app version ready for use: ${event.latestVersion.hash}`);
        this.updates.activateUpdate().then(() => {
          this._snackBar.open("Update Available", "Reload Now")
          .onAction()
          .subscribe(() => document.location.reload());
        });
        break;
      } 
    });
  }
}
