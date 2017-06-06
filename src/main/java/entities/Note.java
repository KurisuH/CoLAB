/*package entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.TableGenerator;


public class Note {
	
   @TableGenerator(
			  name = "Increment1Generator",
			  allocationSize = 1,
			  initialValue = 1)
   @Id
   @GeneratedValue(strategy = GenerationType.TABLE,
   generator="Increment1Generator") 	
   
   private int id;
   private String content;
   private String name;
   
   public Note(int id, String content, String name) {
      super( );
      this.id = id;
      this.name = name;
      this.content = content;
      
   }

   public Note() {
      super();
   }

   public int getId() {
      return id;
   }
   
   public void setId(int id) {
      this.id = id;
   }
   
   public String getName() {
      return name;
   }
   
   public void setName(String name) {
      this.name = name;
   }

   public String getContent() {
      return content;
   }
   
   public void setContent(String content) {
      this.content = content;
   }
   
   @Override
   public String toString() {
      return "Note: Name=" + name + "id=" + id + ", content=" + content;
   }
   
   public static String ConvertString(Note note) {
	      return "Note: Name=" + note.getName() + "id=" + note.getId() + ", note.content=" + note.getContent();
	   }
   
   public static String ToJSON(Note note)
{
	
	String result = "{\"id\":" +  "\"" + note.getId() + "\"" + "," + "\"content\":" +  "\"" + note.getContent()+ "\"" +  "," +  "\"name\":" +  "\"" +note.getName()+ "\""  + "}" ;
	System.out.println(result);
	return result;

}
   
}
*/