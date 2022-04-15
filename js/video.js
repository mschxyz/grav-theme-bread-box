var video_containers = document.getElementsByClassName('video-container')
for (i=0;i<video_containers.length;i++) {
	var vid=video_containers[i].getAttribute('id')
	video_containers[i].innerHTML += '<button onclick="showVideo(\''+vid+'\')">▶</button>'
	var modal = document.createElement('div')
	modal.setAttribute('class','video-modal')
	modal.setAttribute('id','video-modal-'+vid)
	modal.innerHTML = '<div class="video-modal-buttons" id="video-modal-buttons-'+vid+'"></div>'
	modal.innerHTML += '<div class="video-modal-content" id="video-modal-content-'+vid+'"></div>'
	document.body.appendChild(modal)
}

function showVideo(video_id) {
	var modal = document.getElementById('video-modal-'+video_id)
	var modal_buttons = document.getElementById('video-modal-buttons-'+video_id)
	var modal_content = document.getElementById('video-modal-content-'+video_id)
	var button = '<button onclick="hideVideo(\''+video_id+'\')">X</button>'
	var iframe = '<iframe src="https://www.youtube.com/embed/'+video_id+'?autoplay=1" frameborder="0" allowfullscreen></iframe>'
	modal_buttons.innerHTML = button
	modal_content.innerHTML = iframe
	modal.setAttribute('style','display:block')
}

function hideVideo(video_id) {
	var modal = document.getElementById('video-modal-'+video_id)
	var modal_content = document.getElementById('video-modal-content-'+video_id)
	modal.setAttribute('style','display:none')
	modal_content.innerHTML = ''
}
