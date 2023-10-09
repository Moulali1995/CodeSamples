import java.lang.*;
import java.util.*;

public class StrinBuilderTest {
  public static void main(String[] args) {
    // YOUR CODE GOES HERE
    // Please take input and print output to standard input/output (stdin/stdout)
    // DO NOT USE ARGUMENTS FOR INPUTS
    // E.g. 'Scanner' for input & 'System.out' for output
    Scanner sc = new Scanner(System.in);
    int t = sc.nextInt();
    Map<String, Integer> report = new LinkedHashMap<>();
    for (int i = 0; i < t; i++) {
      String name = sc.next();
      int marks = sc.nextInt();
      report.put(name, marks);
    }
    int q = sc.nextInt();
    for (int j = 0; j < q; j++) {

      String name = sc.next();
      Integer result = report.get(name);
      if (result == null) {
        System.out.println("Not found");
      } else {
        System.out.println(result);

      }
    }
    sc.close();
  }
}