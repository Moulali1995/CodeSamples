

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class CalendarTest {

  /*
   * Complete the 'getDay' function below.
   *
   * The function is expected to return a STRING.
   * The function accepts following parameters:
   * 1. String day
   * 2. String month
   * 3. String year
   */

  public static String getDay(String day, String month, String year) {
    Calendar c = Calendar.getInstance();
    c.set(Integer.parseInt(year), Integer.parseInt(month), Integer.parseInt(day));
    int dayOfWeek = c.get(Calendar.DAY_OF_WEEK);
    List<String> daysOfWeek = new ArrayList<>();
    daysOfWeek.add("SUNDAY");
    daysOfWeek.add("MONDAY");
    daysOfWeek.add("TUESDAY");
    daysOfWeek.add("WEDNESDAY");
    daysOfWeek.add("THURSDAY");
    daysOfWeek.add("FRIDAY");
    daysOfWeek.add("SATURDAY");
    return daysOfWeek.get(dayOfWeek-1);
    
  }

  public static void main(String[] args) {

    /**** don't alter the code below *************************************/

    Scanner in = new Scanner(System.in);
    String month = in.next();
    String day = in.next();
    String year = in.next();

    System.out.println(getDay(day, month, year));

    /****************************************************/

  }
}