import java.lang.*;
import java.util.*;

public class ArrayDequeueTest {
  public static void main(String[] args) {
    // YOUR CODE GOES HERE
    // Please take input and print output to standard input/output (stdin/stdout)
    // DO NOT USE ARGUMENTS FOR INPUTS
    // E.g. 'Scanner' for input & 'System.out' for output

    Scanner sc = new Scanner(System.in);
    int t = sc.nextInt();
    Deque<Integer> q = new ArrayDeque<>();
    for (int i = 0; i < t; i++) {
      int x = sc.nextInt();
      int y = sc.nextInt();
      ArrayDequeueTest obj = new ArrayDequeueTest();
      obj.queueOps(q, x, y);

    }
  }

  public void queueOps(Deque<Integer> q, int x, int y) {

    if (x == 1)
      q.addLast(y);
    else if (x == 2)
      q.addFirst(y);
    else if (x == 3) {
      Integer ele = q.peekFirst();
      if (ele != null)
        System.out.println(ele);
      else
        System.out.println(-1);
    } else if (x == 4) {
      Integer ele = q.peekLast();
      if (ele != null)
        System.out.println(ele);
      else
        System.out.println(-1);
    } else if (x == 5)
      q.pollFirst();
    else if (x == 6)
      q.pollLast();

  }
}