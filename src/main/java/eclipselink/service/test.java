package eclipselink.service;
import eclipselink.service.NoteManagement;
import entities.Note;

public class test {
	
	public static void main (String[] args)
	{
		
		//NoteManagement.CreateNote("TestcreateNoteContent", "TestCreateNote");
		
		
		//Note.ToJSON(NoteManagement.FindNote(10));
		
		//NoteManagement.DeleteNote(1);
		//System.out.println(Note.ConvertString(test));
		NoteManagement.FetchAllNotes();
		//NoteManagement.UpdateNote(251, "UpdateThis!-Content", "UpdateThis!");
		//System.out.println("Finished Successfully!");
	}

}
