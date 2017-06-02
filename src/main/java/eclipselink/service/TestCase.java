package eclipselink.service;
import eclipselink.service.NoteManagement;

public class TestCase {
	
	public static void main (String[] args)
	{
		
		NoteManagement.CreateNote("TestnoteName", "Testnote");
		//NoteManagement.DeleteNote(1);
		NoteManagement.FindNote(1);
		//NoteManagement.UpdateNote(251, "Testnote", "Testnotename");
	}

}
