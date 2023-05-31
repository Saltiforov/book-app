<template>
  <FileUpload name="demo[]" url="./upload.php" @upload="onTemplatedUpload($event)" :multiple="true" accept="image/*" :maxFileSize="1000000" @select="onSelectedFiles">
    <template #empty>
      <p>Drag and drop files to here to upload.</p>
    </template>
  </FileUpload>
</template>

<script>
import { ref, defineEmits } from 'vue';

export default {
  name: 'VUploadImage',
  emits: ['change'], // Define the 'change' event

  data() {
    return {
      totalSize: 0,
      totalSizePercent: 0,
      files: [],
    };
  },

  methods: {
    onRemoveTemplatingFile(file, removeFileCallback, index) {
      removeFileCallback(index);
      this.totalSize -= parseInt(this.formatSize(file.size));
      this.totalSizePercent = this.totalSize / 10;
    },

    onClearTemplatingUpload(clear) {
      clear();
      this.totalSize = 0;
      this.totalSizePercent = 0;
    },

    onSelectedFiles(event) {
      this.files = event.files;
      this.files.forEach((file) => {
        this.totalSize += parseInt(this.formatSize(file.size));
      });

      // Emit the 'change' event with the selected file
      this.$emit('change', event.files[0]);
    },

    uploadEvent(callback) {
      this.totalSizePercent = this.totalSize / 10;
      callback();
    },

    onTemplatedUpload(event) {
      // Emit the 'change' event with the selected files
      this.$emit('change', event.files);
    },

    formatSize(bytes) {
      if (bytes === 0) return '0 B';
      const k = 1024;
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    },
  },
};
</script>
<style>
.upload-image__block {
  width: 500px;
}
</style>