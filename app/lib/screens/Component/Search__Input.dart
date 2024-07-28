import 'package:flutter/material.dart';

class SearchInput extends StatefulWidget {
  final String placeholder;
  void Function(String)? onchange;

  SearchInput({super.key, required this.placeholder, required this.onchange});
  @override
  State<SearchInput> createState() => _SearchInputState();
}

class _SearchInputState extends State<SearchInput> {
  @override
  Widget build(BuildContext context) {
    return Container(
      // margin: EdgeInsets.symmetric(horizontal: 5, vertical: 15),
      decoration: BoxDecoration(
          // borderRadius: BorderRadius.circular(20), 
          color: Colors.grey[200]
          ),
      child: TextField(
        decoration: InputDecoration(
            hintText: this.widget.placeholder,
            border: InputBorder.none,
            suffix: Icon(Icons.search_outlined, color: Colors.grey[700],),
            icon: IconButton(onPressed: () {}, icon: Icon(Icons.menu))),
        onChanged: this.widget.onchange,
      ),
    );
  }
}
