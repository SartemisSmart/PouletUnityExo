using UnityEngine;
using System.Collections;

public class CameraSwitch : MonoBehaviour {

	Camera cam1;
	Camera cam2;
	Camera cam3;

	// Use this for initialization
	void Start () {
		cam1 = GameObject.Find("CameraMain").GetComponent<Camera>();
		cam2 = GameObject.Find("Camera 2").GetComponent<Camera>();
		cam3 = GameObject.Find("Camera 3").GetComponent<Camera>();
		cam1.enabled = true;
		cam2.enabled = false;
		cam3.enabled = false;
	}
	
	// Update is called once per frame
	void Update () 
	{
		if (Input.GetButtonDown("Fire1"))
		{
			if (cam1.enabled)
			{
				cam1.enabled = false;
				cam2.enabled = true;
				cam3.enabled = false;
			}
			else if (cam2.enabled)
			{
				cam1.enabled = false;
				cam2.enabled = false;
				cam3.enabled = true;
			}
			else if (cam3.enabled)
			{
				cam1.enabled = true;
				cam2.enabled = false;
				cam3.enabled = false;
			}
		}
	}
}
