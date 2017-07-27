package model;

import java.io.Serializable;

import javax.persistence.*;

import java.util.Date;
import java.util.List;


/**
 * The persistent class for the users database table.
 * 
 */
@Entity
@Table(name="counter")
@NamedQuery(name="User.findAll", query="SELECT u FROM User u")
public class Counter implements Serializable {
	private static final long serialVersionUID = 9L;


	@Id
	private int id;
	
	private int avatar;
	
	private int postit;
	
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getAvatar() {
		return avatar;
	}

	public void setAvatar(int avatar) {
		this.avatar = avatar;
	}

	public int getPostit() {
		return postit;
	}

	public void setPostit(int postit) {
		this.postit = postit;
	}

	@Override
	public String toString() {
		return "Counter [id=" + id + ", avatar=" + avatar + ", postit="
				+ postit + "]";
	}


	
}

	
