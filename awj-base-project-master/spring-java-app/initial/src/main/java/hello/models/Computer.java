package hello;

import java.util.List;
import java.util.ArrayList;

public class Computer {

  private int id;
  private String brand;
  private String model;

  public Computer() {}

  public Computer(int id, String brand, String model){
    this.id = id;
    this.brand = brand;
    this.model = model;
  }

  public int getId(){
    return this.id;
  }

  public void setId(int id){
    this.id = id;
  }

  public String getBrand(){
    return this.brand;
  }

  public void setBrand(String brand){
    this.brand = brand;
  }

  public String getModel(){
    return this.model;
  }

  public void setModel(String model){
    this.model = model;
  }

}
