import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Note } from '../../models/note.model';
import { NoteServiceProvider } from '../../providers/note-service/note-service';

@IonicPage()
@Component({
  selector: 'page-view-note',
  templateUrl: 'view-note.html',
})
export class ViewNotePage {
  note: Note;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private noteService: NoteServiceProvider) {
    this.note = this.navParams.get('note');
  }

  deleteNote(createDate: number) {
    this.noteService.deleteNote(createDate);
    this.navCtrl.pop();
  }
}

