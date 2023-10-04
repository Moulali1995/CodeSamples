import java.util.Date;

public class ObjectClass {
  public static void main(String[] args) {
    Date date1 = new Date();
    System.out.println(date1);
    Date date2 = (Date) date1.clone();
    System.out.println(date2);

  }
}