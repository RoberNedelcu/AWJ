package hello;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.ArrayList;

@RestController
public class ComputerController {
  private List<Computer> computers = new ArrayList<Computer>();

  ComputerController() {
    Computer pc1 = new Computer(1, "Apple", "MC PRO 15");
    Computer pc2 = new Computer(2, "Dell", "Inspiron 17");
    Computer pc3 = new Computer(3, "Lenovo", "G18");

    computers.add(pc1);
    computers.add(pc2);
    computers.add(pc3);

  }

  @RequestMapping(value="/computer", method = RequestMethod.GET)
  public List<Computer> index() {
    return this.computers;
  }

  @RequestMapping(value="/computer/{id}", method = RequestMethod.GET)
  public ResponseEntity show(@PathVariable("id") int id) {
    for(Computer p : this.computers) {
      if(p.getId() == id) {
        return new ResponseEntity<Computer>(p, new HttpHeaders(), HttpStatus.OK);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }

  @RequestMapping(value="/computer/{id}", method = RequestMethod.DELETE)
  public ResponseEntity remove(@PathVariable("id") int id) {
    for(Computer p : this.computers) {
      if(p.getId() == id) {
        this.computers.remove(p);
        return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NO_CONTENT);
      }
    }
    return new ResponseEntity<String>(null, new HttpHeaders(), HttpStatus.NOT_FOUND);
  }

  @RequestMapping(value="/computer", method = RequestMethod.POST)
  public void addComputer(Computer pc){
    this.computers.add(pc);
  }


  @RequestMapping(value="/computer/{id}", method = RequestMethod.PUT)
  public void putComputer(@PathVariable("id") int id, Computer pc){
    pc.setId(id);
  //computers.update(pc);
  }


}
