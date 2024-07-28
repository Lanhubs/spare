import 'package:flutter/material.dart';

class BottomBtn extends StatelessWidget {
  final IconData icon;
  final VoidCallback onClick;
  const BottomBtn({super.key, required this.icon, required this.onClick});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
        onTap: onClick,
        child: Container(
          margin: EdgeInsets.symmetric(vertical: 5),
            child: Icon(
          icon,
          color: Colors.white60,
          size: 25,
        )));
  }
}
