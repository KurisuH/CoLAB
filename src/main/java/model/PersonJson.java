package model;

import java.util.Date;


import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;




/**
 * Class used for unmarshalling from the provided JSON.
 * For usage please see PersonProcessor.java under control.
 * @author Chris
 *
 */
@XmlRootElement (name = "user")
public class PersonJson {

	@XmlElement(name = "gender",required = true)
	private String gender;

	@XmlElement(name = "name", required = true)
	private String name;

	@XmlElement(name = "surname",required = true)
	private String surname;

	@XmlElement(name = "email", required = true)
	private String email;

	@XmlElement(name = "username",required = true)
	private String username;

	@XmlElement(name = "password", required = true)
	private String password;

	@XmlElement(name = "registered", required = true)
	private String registered;

	@XmlElement(name = "phone", required = true)
	private String phone;

	@XmlElement(name = "fax", required = true)
	private String fax;

	@XmlElement(name = "avatar", required = true)
	private String avatar;

	@XmlElement(name = "position", required = true)
	private int position;

	@XmlElement(name = "location",required = true)
	private String location;
	
	@XmlElement(name = "id",required = true)
	private int id;
	
	@XmlElement(name = "registerDate",required = true)
	private Date registerDate;
	
	@XmlElement(name = "birthDate",required = true)
	private long birthDate;


	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getRegistered() {
		return registered;
	}

	public long getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(int birthDate) {
		this.birthDate = birthDate;
	}

	public void setRegistered(String registered) {
		this.registered = registered;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public int getPosition() {
		return position;
	}

	public void setPosition(int position) {
		this.position = position;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAvatar() {
		return avatar;
	}

	public void setAvatar(String avatar) {
		this.avatar = avatar;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	
	public Date getRegisterDate() {
		return registerDate;
	}

	public void setRegisterDate(Date registerDate) {
		this.registerDate = registerDate;
	}


}
