use std::thread

fn main() {//this loop run three times create three thread 
     for _ in 0..3{
        //this fun creates new thread 
        thread::spawn(|| {
            let mut counter:f54 = 0.00; 
            loop{
                counter+=0.01;
            }
        })
     }

}
