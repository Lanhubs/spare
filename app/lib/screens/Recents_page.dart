import 'package:flutter/material.dart';

class RecentsPage extends StatefulWidget {
  const RecentsPage({super.key});

  @override
  State<RecentsPage> createState() => _RecentsPageState();
}

class _RecentsPageState extends State<RecentsPage> {
  int _counter = 0;

  void _uploadItem() {}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.orange,
        leading: Builder(builder: (context) {
          return IconButton(
              onPressed: () {},
              icon: Icon(
                Icons.menu,
                color: Colors.white70,
              ));
        }),
        actions: <Widget>[
          Padding(
            padding: const EdgeInsets.only(right: 8.0),
            child: CircleAvatar(
              child: Image.asset("assets/avatar.png", width: 30, height: 30),
              backgroundColor: Colors.white60,
            ),
          )
        ],
      ),
      body: Center(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              ImageIcon(
                AssetImage("assets/cloud-upload.png"),
                color: Colors.orangeAccent,
                size: 200,
              ),
              SizedBox(height: 30),
              const Text(
                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w400, color: Colors.black87),
                'It seems your cloud storage is empty',
              ),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _uploadItem,
        child: const Icon(
          Icons.add,
          color: Colors.white70,
        ),
        backgroundColor: Colors.orangeAccent,
      ),
    );
  }
}
