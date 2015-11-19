package hello;

import java.util.List;
import java.util.ArrayList;

public class Produs{
    private int id;
    private String denumire;
    private String furnizor;


    public Produs() {}

    public Produs(int id, String denumire, String furnizor){
      this.id = id;
      this.denumire = denumire;
      this.furnizor = furnizor;
    }

    public int getId(){
      return this.id;
    }

    public void setId(int id){
      this.id = id;
    }

    public String getDenumire(){
      return this.denumire;
    }

    public void setDenumire(String denumire){
      this.denumire = denumire;
    }

    public String getFurnizor(){
      return this.furnizor;
    }

    public void setFurnizor(String furnizor){
      this.furnizor = furnizor;
    }

}
