<script>
	// Core
	import { HOMEPARAGRAPH } from "$utils/constants";
	// Components
	import PrimaryBtn from "$components/Common/PrimaryBtn.svelte";
	import PrimaryHeading from "$components/Common/PrimaryHeading.svelte"
	import PrimaryParagraph from "$components/Common/PrimaryParagraph.svelte"
	
	// Const and Vars
	const btnLabel = 'Learn More';
	const btnTarget = '/about';
	const headingText = 'Welcome to our Page';

</script>
<PrimaryHeading {headingText} />
<PrimaryParagraph paragraphText={HOMEPARAGRAPH}/>
<PrimaryBtn {btnTarget} {btnLabel} />
