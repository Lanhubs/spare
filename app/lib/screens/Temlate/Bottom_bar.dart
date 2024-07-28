import 'package:google_nav_bar/google_nav_bar.dart';
import 'package:flutter/material.dart';

class BottomBar extends StatefulWidget {
  void Function(int)? onTabChange;
  BottomBar({super.key, required this.onTabChange});

  @override
  State<BottomBar> createState() => _BottomBarState();
}

class _BottomBarState extends State<BottomBar> {
  @override
  Widget build(BuildContext context) {
    return Container(
        decoration: BoxDecoration(
            color: Colors.orange,
          
          borderRadius: BorderRadius.circular(10)),
        margin: EdgeInsets.symmetric(vertical: 10, horizontal: 10),
        child: GNav(
            
            activeColor: Color.fromARGB(255, 250, 163, 31),
            color: Colors.white70,
            tabActiveBorder:
                Border.all(color: const Color.fromARGB(255, 250, 163, 31)),
            
            tabBackgroundColor: Colors.white,
          rippleColor: Colors.orange,
            tabBorderRadius: 10,
            gap: 10,
            onTabChange: widget.onTabChange,
            tabs: [
              GButton(
                icon: Icons.home_cool_outline,
                text: "Home",
              ),
              GButton(
                icon: Icons.folder_copy_outlined,
                text: "Folders",
              ),
              GButton(
                icon: Icons.file_copy_outlined,
                text: "Files",
              ),
              GButton(
                icon: Icons.settings_outlined,
                text: "Settings",
              )
            ]));
  }
}
