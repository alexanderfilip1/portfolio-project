<template>
  <div>

  </div>
</template>


<script>
export default {
  name: 'DownloadFile',
  created() {
    let link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'resume.pdf'; // set the download attribute to the file name
    link.style.display = 'none'; // hide the link element
    document.body.appendChild(link); // append the link element to the document body
    link.click(); // simulate a click on the link element
    document.body.removeChild(link); // remove the link element from the document body
}
}
</script>

<style scoped>

</style>