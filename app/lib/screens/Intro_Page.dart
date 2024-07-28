import 'package:app/screens/Main_page.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class IntroPage extends StatelessWidget {
  const IntroPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
            child: Padding(
      padding: const EdgeInsets.symmetric(horizontal: 30.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Image.asset("assets/spare.png", height: 200),
          const SizedBox(
            height: 20.0,
          ),
          Text(
            "Spare",
            style: TextStyle(
                fontSize: 35,
                fontWeight: FontWeight.w500,
                fontFamily: GoogleFonts.anton().fontFamily),
          ),
          Text(
            "Backup your files unto the cloud seamlessly like never before and also have access to it",
            textAlign: TextAlign.center,
            style: TextStyle(
                color: Colors.black54,
                fontSize: 16,
                fontWeight: FontWeight.w400,
                fontFamily: GoogleFonts.anton().fontFamily),
          ),
          const SizedBox(
            height: 100.0,
          ),
          GestureDetector(
              onTap: () => Navigator.push(
                  context, MaterialPageRoute(builder: (context) => MainPage())),
              child: Container(
                padding: EdgeInsets.symmetric(horizontal: 20.0),
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(10.0),
                  color: Colors.orange,
                ),
                constraints: const BoxConstraints(
                    maxHeight: 60.0,
                    minWidth: double.infinity,
                    minHeight: 60.0),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Text("Dive in ",
                        style: TextStyle(
                          color: Colors.white,
                          fontSize: 18.0,
                          fontWeight: FontWeight.w500,
                        )),
                    Icon(
                      Icons.arrow_forward_sharp,
                      size: 20.0,
                      color: Colors.white,
                    )
                  ],
                ),

                // decoration: ,
              ))
        ],
      ),
    )));
  }
}
