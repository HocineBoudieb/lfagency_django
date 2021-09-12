from django.core.files.storage import get_storage_class


class PublicStorage(get_storage_class()):
    default_acl = 'public-read'