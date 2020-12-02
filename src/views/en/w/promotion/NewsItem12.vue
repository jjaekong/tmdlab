<template>
    <div class="modal news-view show" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h4>TMD Lab - Yonsei University College of Medicine Joint Research, selected as a “medical device customized material” national assignment.</h4>
					<span>15th September 2020</span>
				</div>
				<div class="modal-body">
					<div class="news-body">
                        - Opening a new era in the field of “internal medical devices” with advanced shape memory polymer source technology that responds to body temperature
<br><br>
						TMD Lab (CEO: Mi-ran Kang), a venture company of cutting-edge new material human implantable medical devices, together with a joint research with Yonsei University Medical School, announce it was selected for the new assignment in the field of 'customized materials and devices sector’ of 'Medical device for the 4th Industrial Revolution and Leading Future Medical Environment Project'’ hosted by the Korea Medical Device Development Fund on 15th Sep.
<br><br>
The research selected as a National assignment this time is to develop a “temperature-sensitive medical device for assisting vascular anastomosis,” to improve the success rate of surgical transplantation. Through this project, it is expected to develop and commercialize a human implantable polymer medical device that prevents stenosis inside blood vessels during surgical operations such as organ transplant surgery and breast reconstruction surgery. It will receive 2.5 billion won from the government out of the 3 billion won project cost for all four years. 
<br><br>
The research team of Professor Hak-Joon Sung of Yonsei University College of Medicine, which is the leading research institute, and a team of Severance surgeons will conduct preclinical tests and evaluation of the biological safety, physical properties, and physicochemical performance of the prototype, and TMD Lab will manage development and construction of a mass synthesis system for polymers.
Professor Hak-Joon Sung of Yonsei University, a registered director of TMD Lab, has been a professor at Georgia Tech and Vanderbilt University, and is considered an expert in the field of polymer research.
<br><br>
Mi-ran Kang, CEO of TMD Lab points out that, “There are currently no similar products for medical devices related to stenosis of vascular anastomosis and vessel regeneration.” It can be applied to various human implantable medical device markets such as stents, artificial fabrics, and needle-type patches.”
<br><br>
Carima, a leading 3D printing company (CEO Lee Byung-keuk), will also study the manufacturing technology of 3D printing-based body temperature-sensitive polymers as a participating organization.
					</div>
					<img class="news-image" src="@/assets/img/promotion/img_news_12_en.jpg">
                    <div class="news-body">
                        [The principle action of a prototype product for prevention of vascular anastomosis stenosis and regeneration of vessels]<br>
                        After being inserted into the human body, a polymer material is restored in a form that wraps the outer wall of blood vessels at body temperature.
                    </div>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn"  @click="close()">Close</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted: function() {
		document.body.classList.add('modal-open');
		var self = this;
		window.setTimeout(function() {
			self.$el.style.display = 'flex'
		}, 500)
	},
	destroyed: function() {
		document.body.classList.remove('modal-open')
	},
	methods: {
		close: function() {
			this.$router.push('/w/en/promotion/news');
		},
	}
}
</script>