package hello;

import java.util.List;
import java.util.ArrayList;

public class Persoana {
    private int id;
    private String name;
    private int age;

    public Persoana() {}

    public Persoana(int id, String name, int age){
      this.name = name;
      this.id = id;
      this.age = age;
    }

    public String getName(){
      return this.name;
    }

    public void setName(String name){
      this.name = name;
    }

    public int getId(){
      return this.id;
    }

    public void setId(int id){
      this.id = id;
    }

    public int getAge(){
      return this.age;
    }

    public void setAge(int age){
      this.age = age;
    }

}
