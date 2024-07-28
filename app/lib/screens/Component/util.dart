import 'package:flutter/material.dart';

class TabItem {
  TabItem({this.stateMachine = "", this.artboard = "", this.status});
  UniqueKey? id = UniqueKey();
  String stateMachine;
  String artboard;
  bool ?status;
  static List<TabItem> tabItemList = [];
}
