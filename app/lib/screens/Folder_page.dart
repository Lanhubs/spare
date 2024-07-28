import 'package:app/screens/Component/Search__Input.dart';
import 'package:flutter/material.dart';

class FolderPage extends StatefulWidget {
  const FolderPage({super.key});

  @override
  State<FolderPage> createState() => _FolderPageState();
}

class _FolderPageState extends State<FolderPage> {
  String folder = "";
  void onchange(String folderName) {
    setState(() {
      folder = folder;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      
      appBar: AppBar(
        backgroundColor: Colors.orange.shade400,
        titleSpacing:0.0 ,
        automaticallyImplyLeading: false,
        title:
            SearchInput(placeholder: "Enter folder name", onchange: onchange),
      ),
    );
  }
}
