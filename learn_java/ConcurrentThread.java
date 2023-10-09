
class MyThread extends Thread {
  private String name;

  public MyThread(String name) {
    this.name = name;
  }

  @Override
  public void run() {
    
    for(int i=0;i<10;i++){
      System.out.println(name + ":" + i);
        try{
          Thread.sleep(1000);
        }catch(InterruptedException e){
                e.printStackTrace();
        }
    }
  }
}

public class ConcurrentThread {
  public static void main(String[] args) {
    MyThread mythread1 = new MyThread("thread-1");
    MyThread mythread2 = new MyThread("thread-2");
    mythread1.start();
    mythread2.start();
  }
}