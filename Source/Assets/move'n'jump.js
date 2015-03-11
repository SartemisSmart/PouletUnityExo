#pragma strict

var walkspeed: float = 2.0;
var jumpheight: float = 300.0;
var grounded = false;

var cam1 : Camera;
var cam2 : Camera;
var cam3 : Camera;

function Start() {
	cam1 = GameObject.Find("CameraMain").GetComponent(Camera);
	cam2 = GameObject.Find("Camera 2").GetComponent(Camera);
	cam3 = GameObject.Find("Camera 3").GetComponent(Camera);


}

function Update() {

    rigidbody.freezeRotation = true;

    if ((Input.GetKey("s") && cam1.enabled) || (Input.GetKey("z") && cam2.enabled) || (Input.GetKey("d") && cam3.enabled)) transform.Translate(Vector3(0, 0, 1) * Time.deltaTime * walkspeed); 
    if ((Input.GetKey("z") && cam1.enabled) || (Input.GetKey("s") && cam2.enabled) || (Input.GetKey("q") && cam3.enabled)) transform.Translate(Vector3(0, 0, - 1) * Time.deltaTime * walkspeed); 
    if ((Input.GetKey("d") && cam1.enabled) || (Input.GetKey("q") && cam2.enabled) || (Input.GetKey("z") && cam3.enabled)) transform.Translate(Vector3(-1, 0, 0) * Time.deltaTime * walkspeed); 
    if ((Input.GetKey("q") && cam1.enabled) || (Input.GetKey("d") && cam2.enabled) || (Input.GetKey("s") && cam3.enabled)) transform.Translate(Vector3(1, 0, 0) * Time.deltaTime * walkspeed); 

if (Input.GetButtonDown("Jump") && grounded) {
        Jump();
        audio.Play();
    }
}

function OnCollisionEnter(hit: Collision) {
    if (hit.gameObject.tag == "Sol")
    {
    	grounded = true;
	}
}

function Jump() {
    if (grounded == true) {
        rigidbody.AddForce(Vector3.up * jumpheight);
        grounded = false;
        animation.Stop();
    }
}