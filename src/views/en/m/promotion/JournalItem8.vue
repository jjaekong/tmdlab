<template>
    <div class="modal journal-view" tabindex="-1" role="dialog" style="display: flex;">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Dilation-Responsive Microshape Programming Prevents Vascular Graft Stenosis</h5>
                    <span></span>
                </div>
                <div class="modal-body">
                    <dl>
                        <dt>Published at:</dt>
                        <dd>Small (2021.03.17, IF 11.459)</dd>
                        <dt>Summary:</dt>
                        <dd>A device for wrapping the outer wall of blood vessels using shape-memory polymers was developed to wrap the blood vessels in the arteriovenous anastomosis area from the outside to prevent rapid expansion of blood vessels and induce stenosis inside the blood vessels. It is significant as the first stent on the outer wall of blood vessels using shape memory polymer-based technology, and its safety and functionality were evaluated through preclinical experiments with rabbits and beagles (DOI: 10.1002/smll.202007297).</dd>
                    </dl>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-block btn-list" @click="close()">Close</button>
                    <a class="btn btn-details" href="https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202007297" target="_blank">
                        <img src="@/assets/img/ico_details.png" />
                        Detailed view
                    </a>
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
	mounted: function() {
		document.body.classList.add('modal-open')
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/m/en/promotion/journal');
		},
	}
}
</script>