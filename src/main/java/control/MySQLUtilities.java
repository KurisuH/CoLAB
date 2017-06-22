package control;

import java.io.InputStream;

import javax.xml.bind.JAXBContext;
import javax.xml.bind.Unmarshaller;
import javax.xml.stream.XMLInputFactory;
import javax.xml.stream.XMLStreamReader;

import model.Person;
import model.Position;
import model.User;
/**
 * Run The Main method to Populate the Database with the enclosed XML.
 * 
 * Additionally:
 * This Class provides functionality to parse a XML. 
 * Said XML should have all information on the same level. 
 * It is designed to work with a slightly modified version of a xml from https://randomuser.me/
 * Said XML is Enclosed in the same package, for now.
 * 
 * More importantly, it provides a function to populate the Database with said XML.
 * 
 * It uses JAXB
 * @author Chris
 *
 */
public class MySQLUtilities {
	
    public static void main(String[] args) throws Exception {
    	
    	
        //Initial Setup for positions Table.
        setupPositions();
        
        new MySQLUtilities().processPerson(MySQLUtilities.class
                .getResourceAsStream("DatabaseExamplePopulation.xml"));
    }

    // TODO: Instead of throws Exception, all exceptions should be wrapped

    public void processPerson(InputStream inputStream) throws Exception {
    	
        JAXBContext jaxbContext = JAXBContext.newInstance(Person.class);
        XMLStreamReader xss = XMLInputFactory.newFactory().createXMLStreamReader(inputStream);
        Unmarshaller unmarshaller = jaxbContext.createUnmarshaller();
        
        // Skip the first Tag
        xss.nextTag();
        
        // Start with the Root
        xss.require(XMLStreamReader.START_ELEMENT, "http://example.org", "Personlist");

        // And now for Each Person parse the XML
        
        while (xss.nextTag() == XMLStreamReader.START_ELEMENT) {

            xss.require(XMLStreamReader.START_ELEMENT, "http://example.org", "results");
            Person person = (Person)unmarshaller.unmarshal(xss);
            
            processPerson(person);   
            populateDatabase(person);
            
            
        }

        xss.require(XMLStreamReader.END_ELEMENT, "http://example.org", "Personlist");
    }

    /**
     * String Representation of a Person
     * @param person
     */
    private void processPerson(Person person) {
    	
    	
    	System.out.print(" - " +person.getEmail());
    	System.out.print(" - " + person.getPassword());
    	System.out.print(" - " + person.getName());
    	System.out.print(" - " + person.getSurname());
    	System.out.print(" - " + person.getPosition());
    	System.out.print(" - " + person.getPhone());
    	System.out.print(" - " + person.getDate());
    	System.out.print(" - " + person.getGender());
    	System.out.print(" - " + person.getRegistered());
    	System.out.print(" - " + person.getFax());
    	System.out.print(" - " + person.getAddress());
    	System.out.print(" - " + person.getPicturelarge());
    	System.out.println();
    	

    }
    
    public static void setupPositions()
    {
    	
    	Position admin = new Position();
    	admin.setId(1);
    	admin.setName("Admin");
    	admin.setPermissionLevel(9);
    	
      	Position  mod = new Position();
    	mod.setId(2);
    	mod.setName("Moderator");
    	mod.setPermissionLevel(5);
    	
    	Position user = new Position();
    	user.setId(3);
    	user.setName("User");
    	user.setPermissionLevel(3);
    	
    	PositionManagement.createPositionFromPosition(admin);
    	PositionManagement.createPositionFromPosition(mod);
    	PositionManagement.createPositionFromPosition(user);
    	

    	/*
      	Position  = new Position();
    	.setId();
    	.setName();
    	.setPermissionLevel();
    	*/

    }
    
    /**
     * This will load the User into the database
     * @param person
     */
     
    public void populateDatabase(Person person) {
    	
    	
    	UserManagement.createUserFromPerson(person);

    }
}