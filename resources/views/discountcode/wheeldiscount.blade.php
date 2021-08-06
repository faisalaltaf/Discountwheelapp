@extends('shopify-app::layouts.default')
@section('content')
<style>
button {
  cursor: pointer;
  padding: 0 6px;
  min-width: 88px;
  min-height: 36px;
}

.controls {
  padding: 24px;
}

.modal-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: rgba(0,0,0,0.15);  
  opacity: 0;
  visibility: hidden;
}

.modal-dialog {
  width: 70vmin;
  height: 70vmin;  
  position: relative;
  overflow: hidden;
}

.modal-svg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-polygon {
  fill: #ab47bc;
}

.modal-content {
  position: relative;
  top: 0;
  left: 0;
  padding: 24px;  
  visibility: hidden;
  opacity: 0;  
  color: rgba(255,255,255,0.87);
}

</style>

<section class="controls">
  <button id="open-button">Open</button>
</section>


<section id="modal-1" class="modal-container">
  
  <div class="modal-dialog">    
    <svg class="modal-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon class="modal-polygon" />
    </svg>
    
    <div class="modal-content">
      <h2>I'm a modal</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis excepturi ut inventore consectetur quos rerum quibusdam accusamus, labore itaque assumenda consequatur cum saepe velit quidem ipsa facilis. Repellendus, reiciendis quam?</p>
    </div>
    
  </div>
</section>

<script>
  const buttons = document.querySelectorAll('.trigger[data-modal-trigger]');

for(let button of buttons) {
	modalEvent(button);
}

function modalEvent(button) {
	button.addEventListener('click', () => {
		const trigger = button.getAttribute('data-modal-trigger');
		// console.log('trigger', trigger)
		const modal = document.querySelector(`[data-modal=${trigger}]`);
		// console.log('modal', modal)
		const contentWrapper = modal.querySelector('.content-wrapper');
		const close = modal.querySelector('.close');

		close.addEventListener('click', () => modal.classList.remove('open'));
		modal.addEventListener('click', () => modal.classList.remove('open'));
		contentWrapper.addEventListener('click', (e) => e.stopPropagation());

		modal.classList.toggle('open');
	});
}

</script>
@endsection