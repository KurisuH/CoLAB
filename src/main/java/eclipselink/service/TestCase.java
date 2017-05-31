package eclipselink.service;
import eclipselink.service.NoteManagement;

public class TestCase {
	
	public static void main (String[] args)
	{
		
		NoteManagement.CreateNote("YOYOYOYOYOY", "BIIIIIIIIIIITCH");
		//NoteManagement.DeleteNote(1);
		NoteManagement.FindNote(2);
		NoteManagement.UpdateNote(251, "BALLER", "BALLINDBSHITYO");
	}

}
