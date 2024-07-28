import 'package:app/screens/Files_page.dart';
import 'package:app/screens/Folder_page.dart';
import 'package:app/screens/Recents_page.dart';
import 'package:app/screens/Settings_page.dart';
import 'package:app/screens/Temlate/Bottom_bar.dart';
import 'package:flutter/material.dart';

class MainPage extends StatefulWidget {
  const MainPage({super.key});

  @override
  State<MainPage> createState() => _MainPageState();
}

class _MainPageState extends State<MainPage> {
  int _selectedIndex = 0;
  final List<Widget> _pages = [
    const RecentsPage(),
    const FolderPage(),
    const FilesPage(),
    const SettingsPage()
  ];
  void navigateBottomBar(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      bottomNavigationBar: BottomBar(
        onTabChange: (index) => navigateBottomBar(index),
      ),
      body: _pages[_selectedIndex],
    );
  }
}
