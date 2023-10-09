import java.lang.*;
import java.util.*;

public class ArrayListTest {
  public static void main(String[] args) {
    // YOUR CODE GOES HERE
    // Please take input and print output to standard input/output (stdin/stdout)
    // DO NOT USE ARGUMENTS FOR INPUTS
    // E.g. 'Scanner' for input & 'System.out' for output
    Scanner sc = new Scanner(System.in);
    ArrayList<Integer> arr = new ArrayList<>();
    while (sc.hasNextInt()) {
      int ele = Integer.parseInt(sc.nextLine());
      if (ele < 0) {
        break;
      }
      arr.add(ele);
    }
    for (int i = arr.size() - 1; i >= 0; i--) {
      System.out.println(arr.get(i) + " ");
    }

  }
}