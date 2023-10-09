
import java.util.*;

public class ScannerClass {

  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);
    String str;
    while (sc.hasNextLine()) {
      str.join(str, sc.next());
      System.out.println("sc--->" + sc.next());
    }
    sc.close();
  }

}