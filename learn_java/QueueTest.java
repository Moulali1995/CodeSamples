
import java.lang.*;
import java.util.*;

public class QueueTest {
  public static void main(String[] args) {
    // YOUR CODE GOES HERE
    // Please take input and print output to standard input/output (stdin/stdout)
    // DO NOT USE ARGUMENTS FOR INPUTS
    // E.g. 'Scanner' for input & 'System.out' for output
    Scanner sc = new Scanner(System.in);
    int t = sc.nextInt();
    Queue<Integer> q = new ArrayDeque<>();
    for (int i = 0; i < t; i++) {

      int x = sc.nextInt();
      int y = sc.nextInt();
      if (x == 1) {
        q.add(y);
      } else if (x == 2) {
        Integer ele = q.peek();
        if (ele != null) {
          System.out.println(ele);
        } else {
          System.out.println(-1);
        }
      } else {
        q.poll();
      }
    }
  }
}
