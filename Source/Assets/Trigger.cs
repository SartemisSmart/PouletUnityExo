﻿using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class Trigger : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	
	void OnTriggerEnter (Collider col) 
	{
		if (col.tag == "Player")
		{
			GameObject.Find("Text").GetComponent<UnityEngine.UI.Text>().text = "YOU WIN !";
		}
	}
}
